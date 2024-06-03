//@ts-nocheck
'use client';

import '@pqina/flip/dist/flip.min.css';

import Tick from '@pqina/flip';
import React, { useEffect, useRef, useState } from 'react';

const FlipClock = ({
  value,
  flipClass,
}: {
  value: string | number;
  flipClass?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
      credits: false,
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ['d', 'h', 'm', 's'],
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true">
        <span
          data-view="flip"
          data-style="rounded:panels"
          data-transform="pad(00)"
          className={flipClass}
        >
          Tick
        </span>
      </div>
    </div>
  );
};

export default FlipClock;
