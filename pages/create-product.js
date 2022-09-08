import React, { useState } from 'react'
import { ref, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import { db, storage } from '../src/firebase'

const CreateProduct = () => {
  const [isShowError, setIsShowError] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    price: '',
  })
  const [file, setFile] = useState()

  const onChangeFile = (e) => {
    const inputFile = e.target.files[0]
    setFile(inputFile)
  }

  const onChangeText = (key) => (e) => {
    setFields(prev => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const checkError = (field) => {
    if (!isShowError) return ''

    if (field === 'name' && fields.name === '') {
      return 'please fill name'
    } else if (field === 'price' && fields.price === '') {
      return 'please fill price'
    }
    return ''
  }

  const createProduct = () => {
    setIsShowError(true)
    Swal.fire({
      title: 'creating a product...',
      didOpen: () => { Swal.showLoading() },
    })

    if (
      checkError('name') === '' &&
      checkError('price') === '' &&
      !!file
    ) {
      // ready to upload
      addDoc(collection(db, 'products'), {
        name: fields.name,
        price: +fields.price,
      }).then((doc) => {
        const productId = doc.id
        const storageRef = ref(storage, productId)

        uploadBytes(storageRef, file).then((snapshot) => {
          setFields({ name: '', price: '' })
          setFile(undefined)
          setIsShowError(false)

          Swal.fire({
            icon: 'success',
            title: 'create product success',
          })
        }).catch((e) => {
          Swal.fire({
            icon: 'error',
            title: 'create product fail',
            text: JSON.stringify(e),
          })
        })
      }).catch((e) => {
        console.log('add doc fail', e)
        Swal.fire({
          icon: 'error',
          title: 'create product fail',
          text: JSON.stringify(e),
        })
      })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Input
        label="Name"
        placeholder="iphone 14"
        onChange={onChangeText('name')}
        error={checkError('name')}
        value={fields.name}
      />
      <div className="h-4" />
      <Input
        label="Price"
        placeholder="999.99"
        type="number"
        onChange={onChangeText('price')}
        error={checkError('price')}
        value={fields.price}
      />
      <div className="h-5" />
      <label
        htmlFor="product-image-uploader"
        className="py-3 sm:w-6/12 w-full text-center bg-gray-400 hover:bg-gray-500 text-white rounded-md cursor-pointer"
      >
        {file ? file.name : 'Upload Image'}
      </label>
      {isShowError && !file && (
        <p className="text-red-500 text-xs italic mt-1">
          please fill file
        </p>
      )}
      <input id="product-image-uploader" onChange={onChangeFile} className="hidden" placeholder="upload image" type="file" />
      <div className="mt-10" />
      <Button
        text="Create Product"
        onClick={createProduct}
      />
    </div>
  )
}

export default CreateProduct
