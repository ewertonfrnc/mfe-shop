import { mount } from "marketing/MarketingApp";

import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen((location) => {
      onParentNavigate(location);
    });
  }, []);

  return <div ref={ref} />;
}
