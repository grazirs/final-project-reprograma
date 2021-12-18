import React from "react";
import './form.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({

  fullName: yup.string().required('O campo nome é obrigatório'),
  mail: yup.string().email('O e-mail informado está inválido').required('O campo número é obrigatório'),
  zipCode: yup.number().typeError('O CEP informado está inválido').positive().required('O campo CEP é obrigatório'),
  logradouro: yup.string().required('o campo endereço é obrigatório'),
  neighborhood: yup.string().required('O campo bairro é obrigatório'),
  complement: yup.string(),
  currentRole: yup.string().required('O campo função atual é obrigatório'),
  phone: yup.string().matches(/^\(\+\d{1,3}\)[0-9 ]{5,20}$/, 'Número de celular inválido (+XX) XXXXXXX-XXXX').required('O campo celular é obrigatório'),
  city: yup.string().required('O campo cidade é obrigatório'),
  state: yup.string().required('O campo UF é obrigatório'),
  number: yup.number('O campo número é obrigatório').typeError('O número informado está inválido').required('O campo número é obrigatório'),
  details: yup.string().max('500').required('O campo motivo pelo qual deseja participar é obrigatório'),
  interactive: yup.bool().typeError('Escolha uma das opções'),
  interactivePackage: yup.bool().typeError('Escolha uma das opções'),
  threadColor: yup.bool().typeError('Escolha uma das opções'),
  category: yup.array().typeError('Escolha uma das opções'),

}).required();

function Form() {
  const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      setValue('logradouro', data.logradouro)
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('state', data.uf)
      setFocus('number')
    })
    
  }
  const onSubmit = data => console.log(data);

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='field'>
          <div className='field-column'>
            <label>*Nome Completo</label>
            <input {...register("fullName")} />
            <span>{errors.fullName?.message}</span>

            <label>*E-mail</label>
            <input {...register("mail")} />
            <span>{errors.mail?.message}</span>

            <label>*Celular</label>
            <input {...register("phone")} placeholder='(+XX) XX XXXXXXXXX' />
            <span>{errors.phone?.message}</span>


            <label>*CEP</label>
            <input {...register("zipCode")} onBlur={checkCEP} />
            <span>{errors.zipCode?.message}</span>

            <label>*Endereço</label>
            <input {...register("logradouro")} />
            <span>{errors.logradouro?.message}</span>

            <label>*Bairro</label>
            <input {...register("neighborhood")} />
            <span>{errors.neighborhood?.message}</span>

            <label>*Número</label>
            <input {...register("number")} />
            <span>{errors.number?.message}</span>

            <label>Complemento</label>
            <input {...register("complement")} />
            <span> {errors.complement?.message}</span>

            <label>*Cidade</label>
            <input {...register("city")} />
            <span>{errors.city?.message}</span>

            <label>*UF</label>
            <input {...register("state")} />
            <span>{errors.state?.message}</span>


          </div>
          <div className='field-column'>

            <label>*Seu pedido será um bordado em:</label>
            <div className='input-category'><input {...register("category")} value={'Bastidor'}
              type='checkbox' /><label
                className='label-category'>Bastidor</label></div>
            <div className='label-category'><input {...register("category")} value={'T-shirt'}
              type='checkbox' /><label>T-shirt</label></div>
            <div className='label-category'><input {...register("category")} value={'Chaveiro'}
              type='checkbox' /><label>Chaveiro</label></div>
            <span>{errors.category?.message}</span>
        
            <label>*Bordado interativo? </label>
            <div className='input-project'><input {...register("interactive")} type='radio' value={true} /><label className='label-project'>Sim</label> </div>
            <div className='input-project'><input {...register("interactive")} type='radio' value={false} /><label className='label-project'>Não</label> </div>
            <span>{errors.interactive?.message}</span>

            <label>*Bordado Colorido ou apenas com linha preta?</label>
            <div className='input-project'><input {...register("threadColor")} type='radio' value={'colorido'} /><label className='label-project'>Colorido</label> </div>
            <div className='input-project'><input {...register("threadColor")} type='radio' value={'preto'} /><label className='label-project'>Linha Preta</label> </div>
            <span>{errors.threadColor?.message}</span>

            <label>*Embalagem Interativa?</label>
            <div className='input-project'><input {...register("interactivePackage")} type='radio' value={true} /><label className='label-project'>Sim</label> </div>
            <div className='input-project'><input {...register("interactivePackage")} type='radio' value={false} /><label className='label-project'>Não</label> </div>
            <span>{errors.interactivePackage?.message}</span>

            <label>*Descrição da sua encomenda</label>
            <input {...register("details")} placeholder='Conte mais sobre sua ideia, com detalhes de tamanho, cor, música' className='input-details' />
            <span>{errors.details?.message}</span>
            <div className='send'>
              <button className='btn' type="submit">Enviar</button>
            </div>
          


          </div>
        </div>

      </form>
    </>);
}

export default Form
