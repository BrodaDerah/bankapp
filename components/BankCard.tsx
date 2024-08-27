import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

<<<<<<< HEAD
const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
=======
const BankCard = ({ account, userName, showBalance = true}: CreditCardProps) => {
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
<<<<<<< HEAD
              {userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

=======
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}

            </p>
          </div>
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white">
<<<<<<< HEAD
              ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image 
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
          />
          <Image 
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image 
          src="/icons/lines.png"
=======
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold text-white tracking-[1.1px]">
              ●●●● ●●●● ●●●●
              <span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image 
          src="/icons/paypass.svg"
          height={24}
          width={20}
          alt="pay"
        />
        <Image 
          src="/icons/mastercard.svg"
          width={45}
          height={32}
          alt="mastercard"
          className="ml-5"
        />
        </div>
        <Image 
          src="/icons/lines.svg"
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>
<<<<<<< HEAD

      {/* COPY */}
=======
      {/*  */}
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
    </div>
  )
}

export default BankCard