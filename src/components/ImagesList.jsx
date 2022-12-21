import {  useNavigate } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery, useTheme } from '@mui/material';

import bombilla_cisne from '../assets/images_list/bombilla_cisne.webp'
import mate_camionero2 from '../assets/images_list/mate_camionero2.webp'
import rosamonte from '../assets/images_list/rosamonte.webp'
import stanleyverde from '../assets/images_list/stanleyverde.webp'

export const ImagesList = () => {
  
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))

  const navigate = useNavigate()

  const handleClickImage = (title) => {
    navigate('/productos',{state:{categorySelectFromHome:title}})
  }

  return (
    <>
    <ImageList 
     cols={isSm? 4 : 2} 
     sx={{ width: 'auto', height: 'auto',objectFit:'contain', }} gap={2}  rowHeight='auto'
    >

      {itemData.map((item) => (
        <ImageListItem 
          key={item.img} 
          name={item.title}
          onClick ={()=>handleClickImage(item.title)}
          sx={{ 
            cursor: 'pointer',
            '&:hover': {
            filter: 'contrast(130%)'
            },

          }
        }
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{
              '&:hover': {
                filter: 'contrast(50%)'
              },
              objectFit:'fill',
            }}
          />

          <ImageListItemBar
            title={item.title}
            position='bottom'
            sx={{textAlign: 'center', fontWeight:'medium'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: mate_camionero2,
    title: 'Mates',
  },
  {
    img: rosamonte,
    title: 'Yerbas',
  },
  {
    img: stanleyverde,
    title: 'Termos',
  },
  {
    img: bombilla_cisne,
    title: 'Bombillas',
  },

];