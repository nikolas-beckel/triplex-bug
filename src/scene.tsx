import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import HexField from './components/HexField';
import { getHexFieldPosition } from './mapGenerator/getHexFieldPosition';

export default function Scene() {
    const hexagonGltf = useGLTF('./models/hexagon.gltf')
    const [hexFields, setHexFields] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        const numRows = 3;
        const numCols = 3;

        const hexFields: Array<JSX.Element> = [];
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const position = getHexFieldPosition(row, col);
                console.log('pos', position);
                hexFields.push(<HexField gltfScene={hexagonGltf.scene} key={`${row}-${col}`} position={position} />);
            }
        }

        setHexFields(hexFields);
    }, []);

    return (
        <>
            {hexFields}

            <ambientLight intensity={0.25} />
            <pointLight
                castShadow={true}
                intensity={0.5}
                position={[-0.4826198543855721, 1.6377178989292671, 5.340964327093364]}
            />
            <pointLight
                castShadow={true}
                position={[6.4178570090635905, 1, -0.9711793664704707]}
                intensity={0.5}
            />
            <pointLight castShadow={true} intensity={0.5} />
        </>
    );
}
