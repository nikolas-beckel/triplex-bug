import { Group } from 'three';

interface HexFieldProps{
    position?: [number, number, number];
    gltfScene: Group;
}

function HexField(props: HexFieldProps) {
    return (
        <primitive onClick={() => console.log(props.position)} object={props.gltfScene} />
    );
}

export default HexField;
