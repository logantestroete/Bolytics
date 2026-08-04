import { TextSizes } from '../../../lib/styling';
import '../../../styles/index.css'
import HomeTeamLogo from '../../../assets/MLB/National League/Milwaukee Brewers/milwaukee-brewers_small_circle.png'

type Props = {
    gamePk: number;
    className?: string;
}

function RowGameScore({gamePk, className}: Props) {
    console.log(gamePk);

    return (
        <div className={`flex items-center justify-between ${className}`}>
            <div className='flex items-center'>
                <img src={HomeTeamLogo} className='size-[3rem]'/>
                <div className='flex flex-col'>
                    <span className={`${TextSizes.sm}`}>MIL</span>
                    <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>68-34</span>
                </div>
            </div>
            <div>@</div>
            <div className='flex items-center'>
                <div className='flex flex-col'>
                    <span className={`${TextSizes.sm}`}>MIL</span>
                    <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>68-34</span>
                </div>
                <img src={HomeTeamLogo} className='size-[3rem]'/>
            </div>
        </div>
    )
}

export default RowGameScore;