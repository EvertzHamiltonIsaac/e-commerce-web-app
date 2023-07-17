import{ useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';
import defaultImage from '../images/defaultImage.png';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProductWishlist());
  }, [dispatch]);

  const wishlistState = useSelector(
    (state) => state?.auth?.wishlist?.data?.wishlist
  );

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      <h1>My wishlist</h1>
        <div className="wishlist-container">
          {!wishlistState === 0 && <div>No Data</div>}
          {wishlistState?.map((item, index) => {
            const imageUrl = item?.images?.[0]?.url || defaultImage;
            const isHovered = item?._id === hoveredItemId;

            return (
              <div
                className="wishlist"
                key={index}
                onMouseEnter={() => handleMouseEnter(item?._id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="wishlist-card position-relative">
                  {isHovered && (
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                  )}
                  <div className="wishlist-card-image">
                    <img
                      src={imageUrl}
                      className="mx-auto img-wish"
                      alt="watch"
                      width={269}
                      height={269}
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
