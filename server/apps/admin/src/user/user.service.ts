import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const new_user = this.userRepository.create(createUserDto);
    const res = await this.userRepository.save(new_user);

    if (!res) {
      return {
        code: HttpStatus.BAD_REQUEST,
        data: null,
        message: '创建失败',
        success: false,
      };
    }

    return {
      code: HttpStatus.OK,
      data: res,
      message: 'success',
      success: true,
    };
  }

  async findAll() {
    const res = await this.userRepository.find();

    if (!res) {
      return {
        code: HttpStatus.BAD_REQUEST,
        data: null,
        message: '查询失败',
        success: false,
      };
    }

    return {
      code: HttpStatus.OK,
      data: res,
      message: 'success',
      success: true,
    };
  }

  async findOne(id: number) {
    const res = await this.userRepository.findOne({ where: { id } });

    return {
      code: HttpStatus.OK,
      data: res,
      message: 'success',
      success: true,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // 先查询用户是否存在
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: null,
        message: '用户不存在',
        success: false,
      };
    }
    const res = await this.userRepository.update(id, {
      ...updateUserDto,
      updated_at: new Date(),
    });
    if (res.affected === 0) {
      return {
        code: HttpStatus.BAD_REQUEST,
        data: null,
        message: '更新失败',
        success: false,
      };
    }
    return {
      code: HttpStatus.OK,
      data: null,
      message: '更新成功',
      success: true,
    };
  }

  async remove(id: number) {
    // 先查询用户是否存在
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        data: null,
        message: '用户不存在',
        success: false,
      };
    }
    const res = await this.userRepository.delete(id);

    if (res.affected === 0) {
      return {
        code: HttpStatus.BAD_REQUEST,
        data: null,
        message: '删除失败',
        success: false,
      };
    }
    return {
      code: HttpStatus.OK,
      data: null,
      message: '删除成功',
      success: true,
    };
  }
}
