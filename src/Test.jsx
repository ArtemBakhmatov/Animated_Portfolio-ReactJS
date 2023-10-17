import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: { opacity: 1, x:800, transition: { duration: 2} },
        hidden: { opacity: 0 }
    }

    const items = ['item1', 'item2', 'item3', 'item3'];

    return (
        <div className="course"> 
            <motion.div 
                className="box" 
                initial={{ opacity: 0.5, scale: 0.5 }}
                //animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 2 }}
                drag
            ></motion.div>

            <motion.div 
                className="box" 
                variants={ variants }
                //initial='hidden'
                //animate='visible'
                //transition={{ duration: 2}}
                animate={ open ? 'visible' : 'hidden' }
            ></motion.div>
            <button onClick={ () => setOpen(prev => !prev)}>click</button>

            <motion.ul>
                { items.map(item => 
                    <motion.li key={item}>
                        { item }
                    </motion.li>
                )}
                
            </motion.ul>
        </div>
    );
};

export default Test;

// duration -> анимация по времени
// delay -> задержка
// initial={{  }} -> начальное состяние
// whileHover={} -> При наведении курсора мыши
// whileTap={} -> При касании 
// whileInView={} -> анимация срабатывает в зоне выидимости экрана
// drag -> за счет при нажатии мыши можно перемещать элемент