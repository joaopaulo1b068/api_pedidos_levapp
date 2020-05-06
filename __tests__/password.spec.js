import { HashPass } from "../src/libs/password"

test('Gerar Hash -- Salt Fixo', () => {
    
    const hash = HashPass('password-1234', 'lone-star', 500, 8, 'sha256')
    const spected = 'lone-star&ecb688af4b417130&500&8&sha256'
    expect(hash.encrypted).toBe(spected)

})

test('Gerar Hash -- Salt Dinamico', () => {

    const hash = HashPass('3BA2GU05LZ').encrypted
    const arr = hash.split('&')
    expect(arr).toHaveLength(5)
    expect(arr[0]).toHaveLength(10)
    expect(arr[1]).toHaveLength(32)
    expect(parseInt(arr[2])).toBe(1000)
    expect(parseInt(arr[3])).toBe(16)
    expect(arr[4]).toBe('sha512')

})