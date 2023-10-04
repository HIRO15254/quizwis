import { builder } from '../builder';

export const Genre = builder.prismaNode('Genre', {
  id: { field: 'databaseId' },
  fields: (t) => ({
    databaseId: t.exposeString('databaseId'),
    genreSet: t.relation('genreSet'),

    name: t.exposeString('name'),
    description: t.exposeString('description', { nullable: true }),
    color: t.exposeString('color', { nullable: true }),
    ratio: t.exposeInt('ratio'),

    parentGenre: t.relation('parentGenre', { nullable: true }),
    childGenres: t.relation('childGenres'),
    quizzes: t.relation('quizzes'),

    createdAt: t.expose('createdAt', { type: 'Date' }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
  }),
});
