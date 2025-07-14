import '../css/seccion_2/textButtonSection.css'

export const TextButtonSection = () => {
  return (
    <div className="section2-text-container">
      <span className="section2-label">Barista.co</span>
      <h2 className="section2-title">Cafe KL</h2>
      <p className="section2-desc">
        Hola a todos, queremos invitarlos a descubrir el encanto de nuestra cafetería, un lugar que nació del amor por un buen café en 2015. 
        <br />
        Desde entonces nos hemos dedicado a perfeccionar cada taza y nos enorgullece decir que ofrecemos el mejor café de Zacualtipán de Ángeles, Hidalgo.
        <br />
        Ven y disfruta de un ambiente acogedor ideal para relajarte, trabajar o compartir un momento especial, te esperamos para que pruebes la diferencia.
      </p>
      <button className="section2-btn">Conocer Baristas</button>
    </div>
  );
} 