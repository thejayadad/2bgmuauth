import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Note from '../note/Note';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { useEffect } from 'react'
import { useState } from 'react'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Not from '../note/Not';


const Category = () => {
    const [value, setValue] = React.useState(0);
    const [activeCategory, setActiveCategory] = useState('all')

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const categories = [
        {id: "1", label: "All", icon: <FormatListNumberedIcon />, categories: "all"},
        {id: "1", label: "Sports", icon: <FormatListNumberedIcon />, categories: "sports"},
        {id: "1", label: "Money", icon: <FormatListNumberedIcon />, categories: "money"},
        {id: "1", label: "Politics", icon: <FormatListNumberedIcon />, categories: "politics"},
    ]



  return (
    <div>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
            {
                categories.map((category) => (
                    <Tab
                        key={category.id}
                        icon={category.icon}
                        label={category.label}
                        categories={category.categories}
                        onClick={() => setActiveCategory(prev => category)}

                    />
                ))
            }
      </Tabs>
    </Box>
    <Box
    spacing="4"
    sx={{
      maxWidth: "80%",
      margin: "auto",

    }}>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
      <Masonry>
            <Note />
            <Note />
            <Note />
            <Note />
      </Masonry>
     </ResponsiveMasonry>
    </Box>

    </div>
  )
}

export default Category