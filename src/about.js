import {Component } from 'react'


export default class About extends Component{
//About component works!
    render(){
        return(

            <div class="container" style={{paddingLeft:'5%',paddingRight:'5%'}}>
    <h2 style={{textAlign:'center'}}> Our Story</h2>
    <section>
        <p>We belive in good. We launched Fresh pan Pizza Best Awards on our Facebook fan page. Fans were given situations where they had to come up
            with wacky and fun execuses. The person with the best execuse won the Best Execuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
            that Pizzeria's Fresh Pan Fizza is the Tastiest Pan Pizza Ever ! 
        </p>
        <p>Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza
            They have been leaving the stage in the middle of a performance and even finding execuses to be disqualified in a football match
        </p>
        <p>We launched Fresh pan Pizza Best Awards on our Facebook fan page. Fans were given situations where they had to come up
            with wacky and fun execuses. The person with the best execuse won the Best Execuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
            that Pizzeria's Fresh Pan Fizza is the Tastiest Pan Pizza Ever ! 
        </p>
        <table>
            <tr>
                <td>
                <img  style={{height: '300px',margin: '3px',width:' 80%'}} alt='qwert'
                    src="https://image.shutterstock.com/z/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg" />   
                </td>
                <td  style={{textAlign:'center'}}><header  style={{textAlign:'center',color:'tomato',fontSize:'2em'}}>Ingredients</header><br/>
                    <p>We are ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir. Stir. While they're still young and fresh- thats our motto. It makes the kitchen a better place </p>
                </td>
            </tr>
            <tr >   
            <td  style={{textAlign:'center'}}><header  style={{textAlign:'center',color:'tomato',fontSize:'2em'}}>Our Chefs</header><br/>
                    <p>We are ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir. Stir. While they're still young and fresh- thats our motto. It makes the kitchen a better place </p>
                </td>
                <td style={{textAlign:"right"}}>
                    <img   style={{height: '300px',margin: '3px',width:' 80%'}} alt='qw'
                    src="https://thumb1.shutterstock.com/display_pic_with_logo/2982127/437116033/stock-photo-happy-chef-437116033.jpg" />
                
                </td>
            </tr>
            <tr style={{}}>
                <td>
                    <img style={{}} alt='qqqw'
                    src="
                    https://thumb9.shutterstock.com/display_pic_with_logo/175989610/669255388/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-669255388.jpg
                    " />
                </td>
                <td  style={{textAlign:'center'}}><header  style={{textAlign:'center',color:'tomato',fontSize:'2em'}}></header><br/>
                    <h4> 45 Mins Delivary</h4>
                </td>
            </tr>
        </table>
    </section>

</div>



        )
    }

}