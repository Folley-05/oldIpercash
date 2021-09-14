const crypto=require('crypto')

const okay="-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxAXeT1g/KoLIrnyo5RiS1Xyz3w6549CgPL9DnbJVVgC6mlDLNag4bTykktJnD9eqLdU8QvHRzD2EKTEMBEFlKv/POj9wMunlA5mP2AwEIFY9QFifwTuqB/Y1Cmnu3OO5bvoYhYpA2ZeQzX06jKZE60SaZ9Ot5PL2I4NgWJFd3/flicPHvrkw16utidsmY1Curnf3I4zHqmHn3eBGaoxH6U+bUQVnoVTorrGpCpKHppWMzgp1OHyuVijoIbzssqbKQTInlM+d3KoT6+Zz46/x6DLFPzKa1IDY2SrF3qM9+LHyMSjT04faF77IEBLvX8Nrr3+4FEgQ6eFAk3J0F0Mb1wIDAQAB-----END PUBLIC KEY-----"

const crypt=(message)=>{
    var encrypt = Buffer.from(message)
    return crypto.publicEncrypt(okay,encrypt).toString('base64')
}

export default crypt