import { FC, useActionState } from 'react'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'
import styles from './contact.module.css'

import { contactInfo, FormInputs } from './lib'
import FormSpace from 'src/shared/components/FormSpace'
import FormInput from 'src/shared/components/FormInput'
import CustomButton from 'src/shared/components/CustomButton'
import { redirect } from 'react-router-dom'

const Contact: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)
  const [_, submitAction, isPending] = useActionState(
    async (_: unknown, formData: any) => {
      try {
        const response = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: formData,
        })
        return response
      } catch (err) {
        console.log(err)
        return null
      } finally {
        redirect('/path')
      }
    },
    null
  )

  return (
    <div className={styles['contact-container']}>
      <section className={styles['contact-info']}>
        <h1 className={styles['contact-header']}>
          <span>{contactInfo.header[lang]}</span>
        </h1>
        <div className={styles['contact-summary']}>
          <h3 className={styles['contact-summary-header']}>
            {contactInfo.summary[lang]}
          </h3>
        </div>
      </section>
      <FormSpace action={submitAction}>
        {FormInputs.map(({ label, name, type, required }) => (
          <FormInput
            key={`${label}-${name}`}
            label={label}
            name={name}
            type={type}
            required={required}
            disabled={isPending}
          />
        ))}
        <CustomButton type='submit' loading={isPending}>
          Submit
        </CustomButton>
      </FormSpace>
    </div>
  )
}

export default Contact
