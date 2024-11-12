import { MinusIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { defaults } from 'autoprefixer'
import { useReducer } from 'react'

const initialValue = 0

function reducer(count, action) {
  switch (action.type) {
    case 'COUNT_+1':
      return count + action.payload
    case 'COUNT_-1':
      return count - action.payload
    default:
      return count
  }
}

/// Tamamen fonksiyonel bir counter oluşturun
// Sayıyı görüntülemeyi ve sayıyı artırmayı mümkün kılın
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, initialValue)

  const handleIncrementClick = () => {
    // () => dispatch({ type: 'increment' })
    dispatch({ type: 'COUNT_+1', payload: 1 })
  }

  const handleDecrementClick = () => {
    dispatch({ type: 'COUNT_-1', payload: 1 })
  }

  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold text-gray-900">
        Şu anki sayı... {count}
      </h3>
      <div className="mt-6">
        <button
          onClick={handleDecrementClick}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <MinusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />1
        </button>
        <button
          onClick={handleIncrementClick}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />1
        </button>
      </div>
    </div>
  )
}
