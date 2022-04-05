import { makeStyles } from "@mui/styles";


export const useStyle = makeStyles((theme) =>({
    navList: {
        minWidth: "50px",
        cursor:"pointer",
        userSelect:"none"
    },
    navAvtar:{
        width:"35px",
        height:"35px",
    },
    ulAvtar:{
        backgroundColor:"#1976d2",
    },

    // Side Nav

    
    drawerPaper:{
        marginTop: "65px",
        width: "250px"
    },

    // wrapper of the main container 
    wrapper:{
        // padding: theme().spacing(2,2,0,32),
    }
   
}));