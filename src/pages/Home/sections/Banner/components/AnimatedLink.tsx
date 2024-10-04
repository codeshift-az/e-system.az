import { motion } from "framer-motion"

export const MotionComponent = ({as, children,...props})=>{
    const ChildrenComponent=motion(as,{
        forwardMotionProps:true,
    })

    return <ChildrenComponent {...props}>{children}</ChildrenComponent>
}