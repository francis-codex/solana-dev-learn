import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("2i2bq1Uk44v6YnN2PFAZ9R86FhN1CFDCbcu4dn7bpJ2w");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey)

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
   `Balance of wallet address ${publicKey} is ${balanceInSol}!`
)