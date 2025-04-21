import React from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  shareMode?: boolean;
  playing?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  readOnly,
  autoFocus,
  shareMode,
  playing,
}) => {
  return (
    <StyledWrapper>
      <div className="form-control">
        {shareMode || playing ? (
          <div className="name-display">
            {value}
          </div>
        ) : (
          <>
            <input
              type="text"
              value={value}
              onChange={onChange}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              required
            />
            <label>
              <span style={{ transitionDelay: '0ms' }}>N</span>
              <span style={{ transitionDelay: '50ms' }}>h</span>
              <span style={{ transitionDelay: '100ms' }}>ậ</span>
              <span style={{ transitionDelay: '150ms' }}>p</span>
              <span style={{ transitionDelay: '200ms' }}> </span>
              <span style={{ transitionDelay: '250ms' }}>t</span>
              <span style={{ transitionDelay: '300ms' }}>ê</span>
              <span style={{ transitionDelay: '350ms' }}>n</span>
              <span style={{ transitionDelay: '400ms' }}> </span>
              <span style={{ transitionDelay: '450ms' }}>Đ</span>
              <span style={{ transitionDelay: '500ms' }}>i</span>
              <span style={{ transitionDelay: '550ms' }}></span>
              <span style={{ transitionDelay: '600ms' }}>C</span>
              <span style={{ transitionDelay: '650ms' }}>ư</span>
              <span style={{ transitionDelay: '700ms' }}>n</span>
              <span style={{ transitionDelay: '750ms' }}>g</span>
              <span style={{ transitionDelay: '800ms' }}></span>
              <span style={{ transitionDelay: '850ms' }}>I</span>
              <span style={{ transitionDelay: '900ms' }}>u</span>
              <span style={{ transitionDelay: '950ms' }}></span>
              <span style={{ transitionDelay: '1000ms' }}>❤️</span>
            </label>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;

  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 400px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 2rem;
    color: #f0e4d0;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    opacity: 0.9;
  }

  .form-control input:focus,
  .form-control input:valid {
    outline: 0;
    border-bottom-color: lightblue;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
    width: 400px;
  }

  .form-control label span {
    display: inline-block;
    font-size: 2rem;
    min-width: 5px;
    color: #f0e4d0;
    opacity: 0.9;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus + label span,
  .form-control input:valid + label span {
    color: lightblue;
    transform: translateY(-30px);
  }

  .name-display {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    color: #f0e4d0;
    opacity: 0.9;
    text-align: center;
    width: 100%;
    padding: 15px 0;
    background-color: transparent;
  }
`;

export default Input;