import { pink } from "@mui/material/colors"

function Comp({children}){
    return(
        <div style={{backgroundColor:'pink'}}>
            {children}
        </div>
    );
};
export default Comp;