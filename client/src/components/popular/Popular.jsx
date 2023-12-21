import ListPopular from './listPopular/ListPopular'
import './popular.css'

export default function Popular() {
  return (
    <section className='popularBooks'>
        <h2>Libros populares</h2>
        <ListPopular/>
    </section>
  )
}