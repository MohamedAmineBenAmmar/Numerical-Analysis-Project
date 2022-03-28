import React, { useEffect, useRef } from "react";
import { Messages } from "primereact/messages";

const Message = ({ severity, summary, detail, sticky }) => {
  const msg = useRef(null);

  useEffect(() => {
      msg.current.show(
          { severity: severity, summary: summary, detail: detail, sticky: sticky }
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      <div className="card">
        <Messages ref={msg} />
      </div>
    </div>
  );
};

export default Message;
