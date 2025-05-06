"use server";
import prisma from '@/prisma/db';
import { handleDatabaseError } from '../activity';

const deleteParamById = async (paramId: number) => {
  try {
    await prisma.param.delete({
      where: {
        id: paramId,
      },
    });
  } catch (error) {
    handleDatabaseError(error, 'deleteParamById');
  }
};

const deleteUploadById = async (uploadId: number) => {
  try {
    await prisma.upload.delete({
      where: {
        id: uploadId,
      },
    });
  } catch (error) {
    handleDatabaseError(error, 'deleteUploadById');
  }
};


export { deleteParamById, deleteUploadById };
