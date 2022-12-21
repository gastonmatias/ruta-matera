//https://learus.github.io/react-material-ui-carousel/

export const ItemCarousel = ({img}) => {
  return (
    <>
        <img
            src={img}  
            style={{
                width: '100%',
                // width: '1024px',
                height: '100%',
                // height: '576px',
                objectFit:'contain',
                padding: 0,
                margin: 0,
            }}
            alt='img caoruseel' 
        />
    </>
  )
}