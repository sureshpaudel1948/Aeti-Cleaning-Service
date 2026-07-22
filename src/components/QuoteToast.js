import React, { useEffect, useState } from 'react';
import './QuoteToast.css';

const QuoteToast = ({ title, message, actionLabel, onAction, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setVisible(false), 3500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="quote-toast" role="status" aria-live="polite">
      <div className="quote-toast__content">
        {title && <div className="quote-toast__title">{title}</div>}
        {message && <div className="quote-toast__message">{message}</div>}
      </div>

      <div className="quote-toast__actions">
        {onAction && (
          <button className="quote-toast__action" type="button" onClick={onAction}>
            {actionLabel}
          </button>
        )}
        {onClose && (
          <button className="quote-toast__close" type="button" aria-label="Dismiss" onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteToast;
