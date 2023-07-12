import { FC } from "react";

type ComponentNameProps = {
    exampleProp: ""
}

export const ComponentName:FC<ComponentNameProps> = ({exampleProp})=>{
    return <div>{exampleProp}</div>
}