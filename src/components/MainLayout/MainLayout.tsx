import { Input, Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import { useRecoilState } from "recoil"
import { 
    canvasSizeState, 
    circlePointsState, 
    colorState, 
    radiusState, 
    stepState 
} from "../../state/params"
import Canva from "../Canva/Canva"
import styles from "./MainLayout.module.scss"

const MainLayout: React.FC = () => {
    const [size, setSize] = useRecoilState(canvasSizeState);
    const [circlePoints, setCirclePoints] = useRecoilState(circlePointsState);
    const [step, setStep] = useRecoilState(stepState);
    const [radius, setRadius] = useRecoilState(radiusState);
    const [color, setColor] = useRecoilState(colorState);

    return <>
        <Layout className={styles.layout}>
            <Sider className={styles.sidebar}>
                <h2>Parameters</h2>
                
                <div>Circle points</div>
                <Input type="number" min={2} max={1000} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value != '') {
                    setCirclePoints(parseInt(e.target.value))
                    }}} value={circlePoints}/>

                <div>Step</div>
                <Input type="number" min={1} max={1000} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value != '') {
                    setStep(parseInt(e.target.value))
                    }}} value={step}/>
            </Sider>
            <Content>
                <Canva/>
            </Content>
        </Layout>
    </>
}

export default MainLayout;