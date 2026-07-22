import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type SharedProps = {
  label: string;
  name: string;
  helper?: string;
  error?: string;
};

function FieldFrame({
  label,
  name,
  helper,
  error,
  children,
}: SharedProps & { children: React.ReactNode }) {
  const helperId = helper ? `${name}-helper` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="field-block">
      <label htmlFor={name}>{label}</label>
      {children}
      {helper && (
        <p id={helperId} className="field-helper">
          {helper}
        </p>
      )}
      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  name,
  helper,
  error,
  ...props
}: SharedProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldFrame label={label} name={name} helper={helper} error={error}>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : helper ? `${name}-helper` : undefined
        }
        {...props}
      />
    </FieldFrame>
  );
}

export function SelectField({
  label,
  name,
  helper,
  error,
  children,
  ...props
}: SharedProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldFrame label={label} name={name} helper={helper} error={error}>
      <select
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : helper ? `${name}-helper` : undefined
        }
        {...props}
      >
        {children}
      </select>
    </FieldFrame>
  );
}

export function TextareaField({
  label,
  name,
  helper,
  error,
  ...props
}: SharedProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldFrame label={label} name={name} helper={helper} error={error}>
      <textarea
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : helper ? `${name}-helper` : undefined
        }
        {...props}
      />
    </FieldFrame>
  );
}
