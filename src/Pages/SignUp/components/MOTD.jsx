import { MotdButton } from "../styles/styles";

const Motd = ({content, handleFunction}) => {
    return (
        <MotdButton onClick={handleFunction}>{content}</MotdButton>
    );
};

export default Motd;