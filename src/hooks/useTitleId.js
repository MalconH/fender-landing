import { useEffect } from "react";
import { useState } from "react";

export default function useTitleId(title) {
  const [titleId, setTitleId] = useState();

  useEffect(() => {
    const punctuactionMarks = /[,.¡!¿?_`´'"]/g;
    const id = title.toLowerCase().replace(punctuactionMarks, "").replaceAll(" ", "-");
    setTitleId(id);
  }, [title]);

  return titleId;
}
