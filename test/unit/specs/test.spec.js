import A from '@/components/compiler.js'
import { expect } from 'chai'

describe('A', () => {
  it('should return the name', () => {
    expect(A.getName()).to.equal('name')
  })
})
