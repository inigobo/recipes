export const errorCheck = (type,value) => {
    
    switch(type){

        case "recepieName":

            if (!/^[A-Za-z]+$/.test(value)) {
                return "Invalid format, only normal characters allowed!";
            }

        break;

        case "ingredients":
            if (!/^[a-zA-Z0-9]+$/.test(value) ) {
                return "Invalid format, only normal characters and numbers allowed!";
            } 

        break;

        case "preparation":

            if(value.length < 12){
                return "That can't be it... Don't be shy, write some more!"

                break;
            } else {
                if (!/^[a-zA-Z0-9]+$/.test(value) ) {
                    return "Invalid format, only normal characters and numbers allowed!";
                } 
            }

        break;

        case "video":

            if(!/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/.test(value)) {

                return "It has to be a youtube video!"
            };
            
        break;

        default:
            return "Something went wrong...";
    }
};