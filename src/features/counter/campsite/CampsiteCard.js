import { Card } from 'reactstrap'
import { CardImg } from 'reactstrap'
import { CardImgOverlay } from 'reactstrap'
import { CardTitle } from 'reactstrap'

const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite;
    return (
        <Card>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};
export default CampsiteCard;