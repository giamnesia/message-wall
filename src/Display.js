
const Display = ({ value, color }) => {
  
  const  getContrastYIQ =(hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }
  
  return (
      <div style={{backgroundColor: `${color}`}} className='outline-none text-center rounded-md  border-2 w-44 h-52 m-2 p-2 md:w-56 h-56'>
      <p style={{color: `${getContrastYIQ(color)}`}} className='text-sm '>{value}</p>
    </div>
  );
};

export default Display;
