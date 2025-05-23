import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs' 
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    //    async register(registerDto: RegisterDto){
    async register({name, email, password }: RegisterDto){
       const user = await this.usersService.FindOneByEmail(email)
       if (user) {
        throw new BadRequestException('User already exist')
       }
       return await this.usersService.create({
        name, 
        email, 
        password: await bcryptjs.hash(password,10)})
    }

    async login(loginDto:LoginDto){
        const user = await this.usersService.FindOneByEmail(loginDto.email)
        if (!user) {
            throw new UnauthorizedException('Email is wrong')
        }

        const isPasswordvalid = await bcryptjs.compare(loginDto.password, user.password)
        if (!isPasswordvalid) {
            throw new UnauthorizedException('Password is wrong')
        }

        const payload = {email: user.email}
        const token = await this.jwtService.signAsync(payload)

        return {token, email:loginDto.email}
    }
}
