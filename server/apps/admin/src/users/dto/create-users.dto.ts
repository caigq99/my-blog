import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'user_name', example: 'George' })
  @IsString({ message: 'user_name is not string' })
  @IsNotEmpty({ message: 'user_name is not empty' })
  user_name: string;

  @ApiProperty({ description: 'password', example: '123456' })
  @IsString()
  @IsNotEmpty({ message: 'password is not empty' })
  password: string;

  @ApiProperty({ description: 'email', example: 'G6NwI@example.com' })
  @IsEmail()
  @IsNotEmpty({ message: 'email is not empty' })
  email: string;

  @ApiProperty({
    description: 'avatar_url',
    example:
      'https://files.codelife.cc/wallhaven/full/39/wallhaven-39qg9y.jpg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'avatar_url is not string' })
  avatar_url?: string;
}
