import React from 'react';
import {useNavigate} from 'react-router-dom';

interface ListingItemProps {
    id: string,
    title: string;
    category: string;
    startDate: string;
    endDate: string;
    reward: string;
    imageURL: string;
}

const ListingItem: React.FC<ListingItemProps> = ({ id, title, category, startDate, endDate, reward, imageURL }) => {
  const navigate = useNavigate();

    function formatDateString(dateString: string): string {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    }

    function handleClickDetailProfile() {
      navigate(`/ad/campaign/${id}`);
  }

  return (
    <button type='button' onClick={() => {
      handleClickDetailProfile();
    }} className="listing-item" style={{border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', margin: '16px', width: '300px'}}>
      <img src={imageURL} style={{ width: '100%', height: '240px', objectFit: 'cover'}}/>
      {/* <img src={imageURL} style={{ width: '270px', height: '256px'}}/> */}
      <div className="listing-details" style={{ padding: '16px' }}>
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{formatDateString(startDate)} ~ {formatDateString(endDate)}</p>
        <p style={{ fontWeight: '600'}}>{reward}</p>
      </div>
    </button>
  );
};

export default ListingItem;