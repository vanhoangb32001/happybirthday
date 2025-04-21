import { SetStateAction, forwardRef, useCallback, useEffect } from 'react';
import Input from '../Input/Input';

interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  shareMode: boolean;
  playing: boolean;
  run: boolean;
}

export const Name: React.FC<React.HTMLProps<HTMLInputElement> & InputProps> =
  forwardRef(
    (
      { name, setName, shareMode, playing, run, ...rest }: InputProps,
      ref: React.LegacyRef<HTMLInputElement>
    ) => {
      console.log('🚀 ~ playing:', playing);
      console.log('🚀 ~ shareMode:', shareMode);
      const onChange = useCallback(
        (e: { target: { value: SetStateAction<string> } }) => {
          setName(e.target.value);
          window.history.pushState({}, '', `?name=${e.target.value}`);
        },
        [setName]
      );

      useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const nameParam = urlParams.get('name');
        if (nameParam !== null) {
          setName(nameParam);
        }
      }, [setName]);

      return (
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: (shareMode || playing) && name.length === 0 ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100dvw',
            zIndex: 40,
          }}
        >
          <Input
            value={name}
            onChange={onChange}
            disabled={shareMode || playing || run}
            readOnly={shareMode || playing || run}
            autoFocus={true}
            shareMode={shareMode}
            playing={playing}
          />
        </div>
      );
    }
  );