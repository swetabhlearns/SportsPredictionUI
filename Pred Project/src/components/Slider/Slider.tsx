import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Slider.css';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const getPercentage = useCallback(() => {
    if (max === min) return 0;
    return ((value - min) / (max - min)) * 100;
  }, [value, min, max]);

  const getValueFromX = useCallback((x: number) => {
    if (!sliderRef.current) return value;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    if (width === 0) return value;
    const percentage = Math.max(0, Math.min(1, (x - left) / width));
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.max(min, Math.min(max, steppedValue));
  }, [min, max, step, value]);

  const handleDrag = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newValue = getValueFromX(clientX);
    onChange(newValue);
  }, [isDragging, getValueFromX, onChange]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e.nativeEvent ? e.nativeEvent.touches[0].clientX : e.nativeEvent.clientX;
    const newValue = getValueFromX(clientX);
    onChange(newValue);
    setIsDragging(true);
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="slider-container"
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <div className="slider-track-wrapper">
          <div className="slider-track" />
          <div className="slider-ticks">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="slider-tick" />
            ))}
          </div>
        </div>
        <div
          className="slider-thumb"
          style={{ left: `calc(${getPercentage()}% - 10px)` }}
        >
          <div className="slider-thumb-inner" />
        </div>
      </div>
    </>
  );
};

export default Slider; 