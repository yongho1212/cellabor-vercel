import React, { useState, Dispatch } from 'react';
import { IconButton } from '@mui/material';
// (20231225, chanhwi) 에러 발생으로 인한 임시 주석처리
// 에러 메세지 : Failed to execute 'createElement' on 'Document': The tag name provided
// import DeleteIcon from '../../images/deletionIcon.svg';
import classNames from 'classnames';

interface Prop {
  textarea?: React.RefObject<HTMLInputElement>;
  onErase?: () => void;
  placeholder?: string;
  textMaxLength?: number;
  errorMessage?: string;
  isError?: boolean;
  style?: React.CSSProperties;
  setIsDefault?: Dispatch<boolean>;
  onMount?: () => void;
  onEnterPress?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onChange: (newValue: any) => void;
  value: string | number | undefined ;
  type: string;
}

const InputComponent: React.FC<Prop> = props => {
  const {
    textarea,
    onErase,
    placeholder,
    textMaxLength,
    errorMessage,
    isError,
    style,
    setIsDefault,
    onMount,
    onEnterPress,
    onChange,
    value,
    type
  } = props;
  const [textLength, setTextLength] = useState(0);
  const [focus, setFocus] = useState(false);

  const defaultStyle = {
    width: '100%',
    height: '30px'
  };

  return (
    <>
      <div
        className={classNames({ 'dialog-input-box': true }, { 'dialog-input-boxerror': isError })}
      >
        <input
          className={classNames(
            { 'dialog-input-input': true },
            { 'dialog-input-input-error': isError }
          )}

          style={{...defaultStyle, ...style}}

          type={type}
          placeholder={placeholder || 'hinted'}
          ref={textarea}
          value={value}
          onChange={event => {
            const newValue = event.currentTarget.value;
            setTextLength(newValue.length);
            if (newValue.trim().length <= 0 && setIsDefault) setIsDefault(true);
            else if (newValue.trim().length > 0 && setIsDefault) setIsDefault(false);
            if (onChange !== undefined) onChange(newValue);  // 상위 컴포넌트의 onChange 핸들러에 새로운 값을 전달
          }}
          onInput={e => {
            e.currentTarget.value = e.currentTarget.value.substring(0, 70);
          }}
          onKeyPress={e => {
            if (onEnterPress !== undefined) {
              onEnterPress(e);
            }
          }}
          maxLength={textMaxLength}
          autoFocus
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setFocus(false);
            }, 350);
          }}
        />
        {/* {textLength > 0 && focus && (
          <div className="dialog-input-erasebtn">
            <IconButton
              onClick={() => {
                eraseText();
              }}
              disableRipple
              size="small"
              onFocus={() => {
                setTimeout(() => {
                  setFocus(true);
                  if (textarea.current) {
                    textarea.current.focus();
                  }
                }, 350);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        )} */}
        {textMaxLength && (
          <span className="dialog-input-input-length">{`${textLength}/${textMaxLength}`}</span>
        )}
      </div>
      <div className="dialog-input-messagebox">{isError && errorMessage && `${errorMessage}`}</div>
    </>
  );
};

InputComponent.defaultProps = {
  onErase: undefined,
  placeholder: undefined,
  textMaxLength: undefined,
  errorMessage: undefined,
  isError: false,
  style: {},
  setIsDefault: undefined,
  onEnterPress: undefined,
  onMount: undefined,
  onChange: undefined,
};

export default InputComponent;
