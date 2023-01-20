import React, { useEffect, useState } from "react";

export default function Select({
  onChange,
  list,
  data,
  selectedItem = null,
  label = null,
  addClass = "",
}) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(
    selectedItem ? selectedItem : list ? list[0] : data ? data[0] : null
  );
  const toggle = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected]);

  return (
    <>
      {label && <label className="customLabel">{label}</label>}

      <div
        className={`customSelect ${active ? "active" : ""} ${addClass}`}
        onClick={toggle}
      >
        <div className="customSelect__label">
          {data ? (
            <>
              {selected.img && (
                <div className="icon">
                  <img src={selected.img} alt="" />
                </div>
              )}
              {selected.text}
            </>
          ) : (
            selected
          )}
        </div>
        <div className="customSelect__list">
          {list &&
            list.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className={`customSelect__list-item ${
                  item === selected ? "active" : ""
                } `}
              >
                {item}
              </div>
            ))}
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className={`customSelect__list-item ${
                  item === selected ? "active" : ""
                } `}
              >
                {item.img && (
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                )}
                {item.text}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
