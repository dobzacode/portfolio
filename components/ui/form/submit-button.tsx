'use client';





import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <Button
      className={`relative  overflow-hidden border border-tertiary90 border-opacity-10 bg-opacity-70 ${
        pending ? 'pointer-events-none' : ''
      }`}
      size="small"
      rounded="small"
      type="submit"
      hover={true}
      intent="pastelTertiary"
      aria-disabled={pending}
    >
      <p className="text-tertiary90">ENVOYER</p>
      {pending && (
        <BarLoader
          className="bg-tertiary50 text-tertiary40"
          height="2px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
