import { useReadContext } from '../../context';
import { log } from '../../../../common/utils';

export default function ReadComponent() {
    log.info('ReadComponent', 're-render');
    const state = useReadContext();
    return <div>读取Context的值：{state.i}</div>;
}
