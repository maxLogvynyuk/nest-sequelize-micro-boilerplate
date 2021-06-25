import { Module } from '@nestjs/common';
import { databaseProviders } from '../providers/database.providers';
// import {userProviders} from '../providers/user.provider';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}