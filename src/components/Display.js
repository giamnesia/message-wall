const Display = ({ value, color,name}) => {
  const getContrastYIQ = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: "11rem",
        margin: "0.1em",
      }}
      className=" shadow-xl mt-5 flex-columns outline-none rounded-md  border-2  h-56"
    >
      <p
           style={{
            color: `${getContrastYIQ(color)}`,
            fontSize: "14px",
            padding: '0.5em',
            wordBreak: 'break-word'
          }}
      >
        To: {name}
      </p>
      <p
        style={{
          color: `${getContrastYIQ(color)}`,
          fontSize: "14px",
          padding: '0.5em',
          wordBreak: 'break-word'
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default Display;
