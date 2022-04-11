import { useReducer } from "react";
import Section from "./Section/section";
import FeedbackOptions from "./FeedbackControls/FeedbackOptions";
import Statistic from "./Statistics/statistics";
import Notifications from "./Notification/notification";

function count(state, action) {
    switch (action.type) {

        case 'good':
            return { ...state, good: state.good + action.payload, visible: true };
        case 'neutral':
            return { ...state, neutral: state.neutral + action.payload, visible: true };
        case 'bad':
            return { ...state, bad: state.bad + action.payload, visible: true };

        default:
            throw new Error('Unsuported action type');
    }
}

export default function Feedback() {
    
    const [state, dispatch] = useReducer(count, {
        good: 0,
        neutral: 0,
        bad: 0,
        visible:false,
    })
  
    const totalFed = () => {
        const { good, neutral, bad } = state;
        return(good + neutral + bad);
    }
  
    const positivPercent = () => {
        return(Math.ceil(state.good * 100 / totalFed()));
    }

return (
    <div className="feedback_module">  
        <Section title="Pleade leave feedback">   
            <FeedbackOptions
                options={["good", "neutral", "bad"]} 
                onLeaveFeedback={dispatch}
            />
        </Section> 

        <Section title="Statistics"> 
            {state.visible ? (
            <Statistic
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
                total={totalFed()}
                positivePercentage={positivPercent()}
            />
            ) : (
                <Notifications text="There is no feedback"/>      
            )}   
        </Section>        
    </div>   
);    
    
};

// class Feedback extends Component {
//     static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     visible: false,
//     };
    
//     state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//     visible: this.props.visible,
//     };
    
  
//     handleIncrement =option=> {
//         this.setState(prevState => ({
//             [option]: prevState[option] + 1,
//         }));
//         this.setState({ visible: true });
//     }

//     totalFed = () => {
//         const { good, bad, neutral } = this.state;
//         let total = good + neutral + bad;
//         return total;
//     }
  
//     positivPercent = () => {
//         const { good } = this.state;
//         const total = this.totalFed();
//         let percent = Math.ceil(good * 100/ total);
//         return percent;
//     }

//     render() {
//         const { good,neutral,bad, visible}= this.state
//         return (
//             <div className="feedback_module">  
//                 <Section title="Pleade leave feedback">   
//                     <FeedbackOptions
//                         options={["good", "neutral", "bad"]} 
//                         onLeaveFeedback={this.handleIncrement}
//                     />
//                 </Section> 

//                 <Section title="Statistics"> 
//                     {visible ? (
//                     <Statistic
//                         good={good}
//                         neutral={neutral}
//                         bad={bad}
//                         total={this.totalFed()}
//                         positivePercentage={this.positivPercent()}
//                     />
//                     ) : (
//                       <Notifications text="There is no feedback"/>      
//                     )}   
//                 </Section>        
//             </div>   
//         );
//     }
// }

// export default Feedback;
