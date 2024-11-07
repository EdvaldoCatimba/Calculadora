import styled from 'styled-components'

export const CalculadoraStyle = styled.div`
width: 50%;
height: 80vh;
background-color: #777676;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 20px;
animation: typing 3s steps(30) 1s infinite;

h1{
    color: #007bff;
    text-shadow: 1px 1px 6px  black;
}
.zona{
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.txt{
    width: 100%;
   font-size: 3rem;
   text-align: center;
   
}
@keyframes typing {
  from {
    box-shadow: 0px 0px 5px 2px #03f317;
  }
  to {
    box-shadow: 0px 0px 5px 2px #ffffff;
  }
}
.number{
    flex: 10;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.btn{
display: flex;
justify-content: space-between;
gap: 10px;
width: 101.2%;
}
.sinal{
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 10px;
}
.number .first, .second, .terceiro,.last{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
 button{
    width: 100%;
    font-size:3rem;
    background-color: #007bff;
    border: 2px solid black;
    color: white;

}
@media (max-width:1248px) {
    width: 80%;
    height: 95vh;
}
@media (max-width:968px) {
    width: 80%;
    height: 95vh;
}
@media (max-width:768px) {
    width: 80%;
    height: 95vh;
}
`;